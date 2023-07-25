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
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        {
          description && <meta name="description" content={description} />
        }
      </Head>
    </>
  );
};
