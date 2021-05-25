import {
  IconButton,
  List,
  ListItem,
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
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";

interface InstrumentsSelectorProps {
  instruments: Instrument[];
}

const useStyles = makeStyles({
  instrumentInput: {
    width: "100%",
  },
});

function parseQuery(query: string, instruments: Instrument[]) {
  const ids = query.split(",");
  const result = [];
  for (const id of ids) {
    const instrument = instruments.find((i) => i.id === id);
    if (instrument) {
      result.push(instrument);
    }
  }
  return result;
}

function updateInstruments(router: NextRouter, instruments: Instrument[]) {
  router.push({
    query: {
      ...router.query,
      instr: instruments.map((i) => i.id).join(","),
    },
  });
}

export default function InstrumentsSelector(props: InstrumentsSelectorProps) {
  const classes = useStyles();
  const {
    i18n: { language },
  } = useTranslation();
  const router = useRouter();
  const instruments = router.query.instr
    ? parseQuery(router.query.instr as string, props.instruments)
    : [];

  function addInstrument(event) {
    const instrument = props.instruments.find(
      (i) => i.id === event.target.value
    );
    if (!_.find(instruments, (i) => i.id === instrument.id)) {
      const updatedInstruments = instruments.concat([instrument]);
      updateInstruments(router, updatedInstruments);
    }
  }

  function removeInstrument(instrument) {
    return () => {
      const updatedInstruments = _.filter(
        instruments,
        (i) => i.id !== instrument.id
      );
      updateInstruments(router, updatedInstruments);
    };
  }

  return (
    <>
      <Typography>Instruments</Typography>
      <TextField
        className={classes.instrumentInput}
        value=""
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
