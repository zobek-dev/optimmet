import Head from "next/head";

interface Props {
  title: string | null | '';
  description: string | null | ''; 
}
export const Seo = ({title, description}: Props) => {
  const renderTitle = !title ? 'Optimmet' : 'Optimmet - ' + title;

  return (
    <>
      <Head>
        <title>{renderTitle}</title>
        {
          description && <meta name="description" content={description} />
        }
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png"/> 
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/> 
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/> 
        <link rel="manifest" href="./site.webmanifest"/>
      </Head>
    </>
  );
};
