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
  console.log(motions);
  return (
    <div>
      {motions.map((motion) => (
        <Link href={`motion/${motion.id}`} key={motion.id}>
          <a>
            <h3>{motion.start_time}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Motion;
