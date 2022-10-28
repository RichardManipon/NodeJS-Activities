const SERVER_HOST = "http://localhost:3000";

export const getStaticPaths = async () => {
  const res = await fetch(`${SERVER_HOST}/api/motion`);
  const data = await res.json();

  const paths = data.map((motion) => {
    return {
      params: {
        id: motion.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${SERVER_HOST}/api/motion/${id}`);
  const data = await res.json();
  return {
    props: { motion: data },
  };
};

const Details = ({ motion }) => {
  return (
    <div>
      {motion.map((m) => (
        <div>
          <h1>Motion {m.id} Details</h1>
          <p>Start time: {m.start_time}</p>
          <p>End time: {m.end_time}</p>
          <img
            src={`data:image/jpeg;base64,${Buffer.from(
              m.image,
              "base64"
            ).toString()}`}
            height="auto"
            width="auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Details;
