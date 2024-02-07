const phrases = [
  "No?",
  "Are you sure?",
  "Are you absolutely sure?",
  "I'll be upset",
  "Why are you doing this to me?",
  "I'm gonna cry...",
  "Who else if not you?",
  "You'll break my heart",
];

type NoContentProps = {
  noCount: number;
};

export const NoContent = ({ noCount }: NoContentProps) => {
  const getNoButtonPhrase = () => {
    return phrases[noCount % phrases.length];
  };

  return (
    <div className="content">
      {!noCount ? (
        <video key={noCount} autoPlay loop muted width="200px" height="200px">
          <source src={`../src/assets/video/main.mp4`} type="video/mp4" />
        </video>
      ) : (
        <>
          <video key={noCount} autoPlay loop muted width="200px" height="200px">
            <source
              src={`../assets/video/${(noCount % phrases.length) + 1}.mp4`}
              type="video/mp4"
            />
          </video>
          <p>{getNoButtonPhrase()}</p>
        </>
      )}
    </div>
  );
};
