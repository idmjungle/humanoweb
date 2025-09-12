import Head from "next/head";

interface CustomHeadProps {
  place: string;
}

const CustomHead = ({ place }: CustomHeadProps) => {

  return (
    <Head>
      <link rel="canonical" href={`https://www.humanoweb.com${place}`} />
    </Head>
  );
}
 
export default CustomHead;