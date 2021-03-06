import { data } from "../../data";
import Image from "next/image";
import Link from 'next/link'
import Head from 'next/head'
import style from '../../styles/Product.module.css'
const Product = ({ product }) => {
  console.log({product});
  return (
    <div className={style.container}>
      <Head>
        <title>{product.title}</title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation Agency Near NY"
        />
      </Head>
      <div className={style.cardL}>
        {product.images.map((img) => (
          <div key={img.id} className={style.imgContainer}>
            <Image src={img.url} layout="responsive" width="100%" height="100%" objectFit="cover" alt="" />
          </div>
        ))}
      </div>
      <div className={style.cardS}>
        <h1 className={style.title}>{product.title}</h1>
        <p className={style.desc}>{product.longDesc}</p>
        <button className={style.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Product;


