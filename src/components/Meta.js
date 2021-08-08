import Head from 'next/head'

const Meta = ({
  title,
  favicon,
  keywords,
  desc,
  language,
  author,
  robots,
  charSet,
  contentType,
}) => {
  return (
    <Head>
      <meta charSet={charSet} />
      <meta name='title' content={title} />
      <meta name='description' content={desc} />
      <meta name='keywords' content={keywords} />
      <meta name='robots' content={robots} />
      <meta httpEquiv='Content-Type' content={contentType} />
      <meta name='language' content={language} />
      <meta name='author' content={author} />

      <link rel='shortcut icon' type='image/x-icon' href={favicon}></link>

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='true'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap'
        rel='stylesheet'
      />

      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'NextGull - Dashboard template build with NextJS & Material-UI',
  favicon: 'favicon.ico',
  desc: "I'm Mehedi I'm an expoerieced web developer - specially frontend framework like ReactJS",
  keywords: 'next, reactjs, nextjs',
  language: 'English',
  author: 'Mehedi Hasan',
  robots: 'index, follow',
  charSet: 'utf-8',
  contentType: 'text/html',
}

export default Meta
