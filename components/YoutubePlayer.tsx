import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  youtubeWrapper: {
    position: "relative",
    paddingBottom: "56.25%",
  },
  youtubeEmbed: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

interface YoutubePlayerProps {
  url: string;
}

export default function YoutubePlayer(props: YoutubePlayerProps) {
  const classes = useStyles();

  return (
    <div className={classes.youtubeWrapper}>
      <iframe
        className={classes.youtubeEmbed}
        src={props.url}
        title="YouTube video player"
        frameBorder="0"
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
