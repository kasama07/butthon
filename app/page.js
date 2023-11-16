import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main className={styles.all}>
      <div className={styles.head}>
        POR.COM
      </div>
      <div className={styles.bodya}>
      <a
          href="https://www.traveloka.com/th-th/hotel?id=5661734229114587795&adloc=th-th&kw=5661734229114587795_traveloka%20%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%A1&gmt=b&gn=g&gd=c&gdm=&gcid=672158148468&gdp=&gdt=&gap=&pc=1&cp=5661734229114587795_HTB-TVLK-LOC-D-s_5661734229114587795_&aid=156020335387&wid=kwd-456804442297&fid=&gid=1012728&kid=_k_CjwKCAiA0syqBhBxEiwAeNx9N2RIzNXoXXvv0x5gNv1IhM2eC1q-rM05c1LjPVs9vhfpG4EGjJScCBoCAXsQAvD_BwE_k_&utm_id=rqLVKPCo&ad_id=672158148468&target_id=kwd-456804442297&click_id=CjwKCAiA0syqBhBxEiwAeNx9N2RIzNXoXXvv0x5gNv1IhM2eC1q-rM05c1LjPVs9vhfpG4EGjJScCBoCAXsQAvD_BwE&group_id=156020335387&contexts=%7B%22accessCode%22:%225297THSEM8136%22%7D&gclid=CjwKCAiA0syqBhBxEiwAeNx9N2RIzNXoXXvv0x5gNv1IhM2eC1q-rM05c1LjPVs9vhfpG4EGjJScCBoCAXsQAvD_BwE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          traveloka 
          </h2>
        
        </a>
      </div>

      <div className={styles.bodyb}>
      <a
          href="https://www.booking.com/index.th.html?aid=309654;label=hotels-thai-th-xiFzJN20DPQ7V8GyEcSicAS500819109777:pl:ta:p1:p22,563,000:ac:ap:neg:fi:tikwd-13503984534:lp1012728:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg;ws=&gclid=CjwKCAiA0syqBhBxEiwAeNx9N7eI-FfdDfh311OlMHuVkfjSH331tRzAvD0taK8-kQ_LIaXMzmRWvxoCx8wQAvD_BwE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          booking 
          </h2>
          
        </a>
      </div>

      <div className={styles.bodyc}>
      <a
          href="https://www.trivago.co.th/th/lm?themeId=115&search=200-196&sem_keyword=%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%20%E0%B8%88%E0%B8%AD%E0%B8%87%20%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%A1&sem_creativeid=607834885609&sem_matchtype=e&sem_network=g&sem_device=c&sem_placement=&sem_target=&sem_adposition=&sem_param1=&sem_param2=&sem_campaignid=12450577325&sem_adgroupid=119711672818&sem_targetid=kwd-302111832655&sem_location=1012728&cipc=sem&cip=6619000847&gclid=CjwKCAiA0syqBhBxEiwAeNx9NzlfcbbZgs1XNOL_fPlYakVXOaPrxxFPpbW4RQQWZrOux1nUIizUGxoCFn0QAvD_BwE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          trivago 
          </h2>
        
        </a>
      </div>
      
      <div className={styles.bodyd}>
      <a
          href="https://www.agoda.com/th-th/?site_id=1891472&tag=b562ea05-224e-1983-0f79-097bfa3a5fa1&device=c&network=g&adid=577762143029&rand=10969760344348257770&expid=&adpos=&aud=kwd-298264821335&gclid=CjwKCAiA0syqBhBxEiwAeNx9N1f8bU4g0Z7RjNhZDTqjZ9fDaOBXDjteUKnTO5IJTV07fjayETca1BoCr9YQAvD_BwE&pslc=1&ds=aCRvZ5l8FdXVnJSA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          agoda 
          </h2>
         
        </a>
      </div>

      <maintwp className={styles.alltwo}>
      <div className={styles.bodye}>
        <Image src = "/รีสอร์ท.jpeg" width={370} height ={195} alt='room'/>
      </div>

      <div className={styles.bodyf}>
        <Image src = "/โรงแรม.jpeg" width={370} height ={195} alt='room'/>
      </div>
      <div className={styles.bodyg}>
        <Image src = "/วิลล่า.jpeg" width={370} height ={195} alt='room'/>
      </div>
      <div className={styles.bodyh}>
        <Image src = "/อพาตแมน.jpeg" width={377} height ={195} alt='room'/>
      </div>

      </maintwp>
      
      <maintwp className={styles.allthree}>
      <a
          href="./AboutUs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          about
          </h2>
         
        </a>
      </maintwp>
      

    </main>
  )
}