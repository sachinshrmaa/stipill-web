import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Getting Started - Stipill</title>
        <meta name="description" content="Fuel with passion with Stipill" />
      </Head>
      <main>

          <div className='col-md-10 m-auto col-11 py-5'>
            <div className='row align-items-center '>
              <div className='col-md-6'>
                <h1 className={styles.heroHeading}>What would you do if money wasn&apos;t the factor?</h1>
                <p className={styles.heroPara}>Stipill allows you the freedom to do what you truely love and enjoy and suports your work with rewards from your true supporter.</p>
                <Link href='/auth/signup' className='btn button py-3 px-5 mt-4'>Get Started &rarr;</Link>
              </div>
              <div className='col-md-6 d-flex justify-content-end'>
                <Image src='/img/chatting.png' height='340' width='470' className={styles.heroImg} alt="Fuel with passion with Stipill" />
              </div>
            </div>
          </div>

          
          <div className='col-md-10 m-auto col-11'>

              <div class={styles.workingSection}>
                <h1 class="h1 heading text-center mt-5 mb-5">How Does Stipill Works?</h1>

                <div class="row m-auto d-flex justify-content-around">

                  <div class="col-lg-2 col-10 steps mb-3">
                    <h3 class={styles.stepCount}>1</h3>
                    <p class={styles.stepDes}>Create your Stipill account- <Link href="/auth/signup">Get Started</Link></p>
                  </div>

                  <div class="col-lg-2 col-10 steps mb-3">
                    <h3 class={styles.stepCount}>2</h3>
                    <p class={styles.stepDes}>Setup your Stipill page, to be found by your true supporters</p>
                  </div>

                  <div class="col-lg-2 col-10 steps mb-3">
                    <h3 class={styles.stepCount}>3</h3>
                    <p class={styles.stepDes}>Share your work on your Stipill page with your true supporters</p>
                  </div>

                  <div class="col-lg-2 col-10 steps mb-3">
                    <h3 class={styles.stepCount}>4</h3>
                    <p class={styles.stepDes}>Receive payments from your true supporters, direct into your Bank</p>
                  </div>

                </div>
              </div>
  

          </div>


          <section class={styles.footerCard}>
            <div class="row py-5">
              <div class="col text-center ">
                <h1 class="text-center heading pt-5">Ready for the move?</h1>
                <p class="py-4">Because doing what you love might be the easiest way to boost your career.</p>
                <Link href="/auth/signup" class="btn button py-3 px-5">Get Started</Link>
              </div>
            </div>
          </section>

      </main>
    </>
  )
}
