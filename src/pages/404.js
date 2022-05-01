import * as React from "react";
import {Link} from 'gatsby';
import Layout from "../components/Layout";
import Seo from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <Seo title='Error'/>
    <main className='error-page'>
      <section>
        <h1>404</h1>
        <h3>Page not found</h3>
        <p>Go to the <Link to='/'>Home Page</Link></p>
      </section>
    </main>
  </Layout>
);

export default NotFoundPage;
