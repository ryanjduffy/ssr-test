export default function Home(props) {
  return (
    <code>
      <pre>
        {JSON.stringify(props, undefined, 2)}
      </pre>
    </code>
  )
}

export const getStaticProps = async function ({ params }) {
  return {
    props: {
      fromStaticProps: 123
    },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  return { fallback: "blocking", paths: [] };
}