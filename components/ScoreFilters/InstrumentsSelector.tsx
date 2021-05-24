import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Instrument } from "data/instrument";
import _ from "lodash";
import { useTranslation } from "next-i18next";
import { useState } from "react";

interface InstrumentsSelectorProps {
  instruments: Instrument[];
}

const useStyles = makeStyles({
  instrumentInput: {
    width: "100%",
  },
});

export default function InstrumentsSelector(props: InstrumentsSelectorProps) {
  const classes = useStyles();
  const {
    i18n: { language },
  } = useTranslation();
  const [instrumentDraft, setInstrumentDraft] = useState("");
  const [instruments, setInstruments] = useState([]);

  function addInstrument(event) {
    const instrument = props.instruments.find(
      (i) => i.id === event.target.value
    );
    setInstrumentDraft(instrument.id);
    if (!_.find(instruments, (i) => i.id === instrument.id)) {
      setInstruments(instruments.concat([instrument]));
    }
  }

  function removeInstrument(instrument) {
    return () => {
      setInstruments(_.filter(instruments, (i) => i.id !== instrument.id));
    };
  }

  return (
    <>
      <Typography>Instruments</Typography>
      <TextField
        className={classes.instrumentInput}
        value={instrumentDraft}
        onChange={addInstrument}
        select
        label="Filter by instrument"
      >
        {props.instruments.map((i) => (
          <MenuItem key={i.id} value={i.id}>
            {i.name[language]}
          </MenuItem>
        ))}
      </TextField>
      <List dense>
        {Array.from(instruments).map((i: Instrument) => (
          <ListItem key={i.id}>
            <ListItemText primary={i.name[language]} />
            <ListItemSecondaryAction>
              <IconButton onClick={removeInstrument(i)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
}
