import Link from "next/link";

const SERVER_HOST = "http://localhost:3000";

export const getStaticProps = async () => {
  const res = await fetch(`${SERVER_HOST}/api/motion`);
  const data = await res.json();

  return {
    props: { motions: data },
  };
};

const Motion = ({ motions }) => {
  console.log(motions.length);

  return (
    <div>
      <h1>Motion List</h1>
      {motions.map((motion) => (
        <Link href={`motion/${motion.id}`} key={motion.id}>
          <a>
            <p>{motions.length != 0 ? "Motion id: " + motion.id : "no data"}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Motion;
