import React from 'react';
import {
  createStyles,
  Text,
  Container,
  rem,
  Image,
  Box,
  Grid,
  List,
  Col,
  Center,
  MediaQuery,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'gatsby';

const useStyles = createStyles(theme => ({
  footer: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: '#171717',
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  title: {
    fontWeight: 600,
    color: '#FFF',
  },
  subtitle: {
    fontWeight: 400,
    color: '#ADB5BD',
  },
  content: {
    fontWeight: 400,
    color: '#FFF',
    cursor: 'pointer',
    ':hover': {
      color: '#ADB5BD',
    },
  },
}));

export const Footer: React.FC = () => {
  const { classes } = useStyles();

  const mobileScreen = useMediaQuery('(max-width: 30em)');

  return (
    <footer className={classes.footer}>
      <Container size="ll" pb={mobileScreen ? 42 : 84}>
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Grid mt="lg" pb={64} fz="sm" sx={{ color: 'white', textAlign: 'center' }}>
            <Col span={6} mb={-24}>
              <Text mb="sm">Berizin dan Diawasi Oleh</Text>
            </Col>
            <Col span={6} mb={-24}>
              <Text mb="sm">Telah Terdaftar Oleh</Text>
            </Col>
            <Col span={6}>
              <Image src="/img/ojk-logo.png" height={55} sx={{ cursor: 'pointer' }} fit="contain" />
            </Col>
            <Col span={6}>
              <Image
                src="/img/kemkominfo-logo.png"
                height={55}
                sx={{ cursor: 'pointer' }}
                fit="contain"
              />
            </Col>
            <Col span={6} mb={-24} mt={16}>
              <Text mb="sm">Didukung Oleh</Text>
            </Col>
            <Col span={6} mb={-24} mt={16}>
              <Text mb="sm">Anggota Dari</Text>
            </Col>
            <Col span={6}>
              <Image src="/img/iso-logo.png" height={55} sx={{ cursor: 'pointer' }} fit="contain" />
            </Col>
            <Col span={6}>
              <Image
                src="/img/aludi-logo.png"
                height={55}
                sx={{ cursor: 'pointer' }}
                fit="contain"
              />
            </Col>
          </Grid>
        </MediaQuery>
        <Box sx={{ marginBottom: '2rem' }}>
          <Image src="/img/logo-white.png" height={44} width={95} />
        </Box>
        <Box>
          <Grid gutter={2}>
            <Col span={mobileScreen ? 12 : 5}>
              <Box maw={380}>
                <Text
                  className={classes.title}
                  mb={mobileScreen ? 'md' : 'lg'}
                  fz={mobileScreen ? 14 : 16}>
                  PT ICX bangun Indonesia
                </Text>
                <Text className={classes.subtitle} fz={mobileScreen ? 12 : 14} maw={320}>
                  Grand Slipi Tower, Lantai 21 Unit L Jl. Letjend S. Parman Kav. 22–24, Palmerah,
                  Jakarta Barat 11480
                </Text>
              </Box>
              <Box>
                <Grid gutter={0} mt="xl" mb={mobileScreen ? 28 : 33}>
                  <Col span="auto">
                    <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="md">
                      Telephone
                    </Text>
                    <Text className={classes.subtitle} fz={mobileScreen ? 12 : 14}>
                      +62 21 51401627
                    </Text>
                  </Col>
                  <Col span="auto">
                    <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="md">
                      WhatsApp
                    </Text>
                    <Text className={classes.subtitle} fz={mobileScreen ? 12 : 14}>
                      +628111442878
                    </Text>
                  </Col>
                  <Col span="auto">
                    <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="md">
                      Email
                    </Text>
                    <Text className={classes.subtitle} fz={mobileScreen ? 12 : 14}>
                      hello@icx.id
                    </Text>
                  </Col>
                </Grid>
              </Box>
              <Box mb={mobileScreen ? 28 : 33}>
                <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="md">
                  Social Media
                </Text>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Image
                    mr="sm"
                    sx={{ cursor: 'pointer' }}
                    src="/img/youtube.png"
                    height={32}
                    width={32}
                    onClick={() =>
                      window.open(
                        'https://www.youtube.com/@IndonesiaCrowdfundingExchange',
                        '_blank',
                      )
                    }
                  />
                  <Image
                    sx={{ cursor: 'pointer' }}
                    src="/img/instagram.png"
                    height={24}
                    width={24}
                    onClick={() => window.open('https://www.instagram.com/icx.id/', '_blank')}
                  />
                </Box>
              </Box>
            </Col>
            <Col span="auto">
              <Box mb={mobileScreen ? 28 : 33}>
                <Text
                  className={classes.title}
                  fz={mobileScreen ? 14 : 16}
                  mb={mobileScreen ? 'md' : 'lg'}>
                  Content
                </Text>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                    Home
                  </Text>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                    About Us
                  </Text>
                </Link>
              </Box>
            </Col>
            <Col span={mobileScreen ? 12 : 'auto'}>
              <Box mb={mobileScreen ? 28 : 33}>
                <Text
                  className={classes.title}
                  fz={mobileScreen ? 14 : 16}
                  mb={mobileScreen ? 'md' : 'lg'}>
                  Tata Kelola
                </Text>
                <Link to="/tata-kelola/kebijakan-privasi" style={{ textDecoration: 'none' }}>
                  <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                    Kebijakan Privasi
                  </Text>
                </Link>
                <Link to="/tata-kelola/isms" style={{ textDecoration: 'none' }}>
                  <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                    ISMS
                  </Text>
                </Link>
                <Link to="/tata-kelola/mitigasi-risiko" style={{ textDecoration: 'none' }}>
                  <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                    Mitigasi Resiko
                  </Text>
                </Link>
                <Link to="/tata-kelola/syarat-dan-ketentuan" style={{ textDecoration: 'none' }}>
                  <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                    Syarat & Ketentuan
                  </Text>
                </Link>
                <Link to="/tata-kelola/sla" style={{ textDecoration: 'none' }}>
                  <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                    SLA
                  </Text>
                </Link>
                {/* <Link to="/tata-kelola/faq" style={{ textDecoration: 'none' }}>
                  <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                    FAQ
                  </Text>
                </Link> */}
              </Box>
            </Col>
            <Col span={mobileScreen ? 12 : 'auto'}>
              <Box>
                <Text
                  className={classes.title}
                  fz={mobileScreen ? 14 : 16}
                  mb={mobileScreen ? 'md' : 'lg'}>
                  {mobileScreen ? <Center>Get The App</Center> : 'Get The App'}
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: mobileScreen ? 'center' : 'normal',
                  }}>
                  <Box>
                    <Image
                      src="/img/google-play.webp"
                      height={mobileScreen ? 'auto' : 55}
                      width={mobileScreen ? 220 : 'auto'}
                      mb="sm"
                      sx={{ cursor: 'pointer' }}
                      fit="contain"
                    />
                    <Image
                      src="/img/app-store.webp"
                      height={mobileScreen ? 'auto' : 55}
                      width={mobileScreen ? 220 : 'auto'}
                      sx={{ cursor: 'pointer' }}
                      fit="contain"
                    />
                  </Box>
                  <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                    <Grid mt="lg" sx={{ color: 'white' }} fz="xs" ta="center">
                      <Col span={6} mb={-24}>
                        <Text mb="sm">Berizin dan Diawasi Oleh</Text>
                      </Col>
                      <Col span={6} mb={-24}>
                        <Text mb="sm">Telah Terdaftar Oleh</Text>
                      </Col>
                      <Col span={6}>
                        <Image
                          src="/img/ojk-logo.png"
                          height={55}
                          sx={{ cursor: 'pointer' }}
                          fit="contain"
                        />
                      </Col>
                      <Col span={6}>
                        <Image
                          src="/img/kemkominfo-logo.png"
                          height={55}
                          sx={{ cursor: 'pointer' }}
                          fit="contain"
                        />
                      </Col>
                      <Col span={6} mb={-24} mt={16}>
                        <Text mb="sm">Didukung Oleh</Text>
                      </Col>
                      <Col span={6} mb={-24} mt={16}>
                        <Text mb="sm">Anggota Dari</Text>
                      </Col>
                      <Col span={6}>
                        <Image
                          src="/img/iso-logo.png"
                          height={55}
                          sx={{ cursor: 'pointer' }}
                          fit="contain"
                        />
                      </Col>
                      <Col span={6}>
                        <Image
                          src="/img/aludi-logo.png"
                          height={55}
                          sx={{ cursor: 'pointer' }}
                          fit="contain"
                        />
                      </Col>
                    </Grid>
                  </MediaQuery>
                </Box>
              </Box>
            </Col>
          </Grid>
        </Box>
        <MediaQuery query="(max-width: 605px)" styles={{ display: 'none' }}>
          <Box mt={mobileScreen ? 60 : 80}>
            <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="sm">
              Disclaimer
            </Text>
            <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb={mobileScreen ? 28 : 40}>
              <Text component="span" color="#fff">
                PT ICX BANGUN INDONESIA
              </Text>
              &nbsp;(selanjutnya disebut “ICX”) adalah badan hukum yang didirikan berdasarkan hukum
              Republik Indonesia dan bertindak sebagai Penyelenggara Layanan Urun Dana Melalui
              Penawaran Efek Berbasis Teknologi Informasi yang telah berizin dan diawasi oleh
              Otoritas Jasa Keuangan (“OJK”) berdasarkan Keputusan Dewan Komisioner OJK Nomor
              Kep-068/D.04/2020 tentang Pemberian Izin Usaha Penyelenggara Layanan Urun Dana Melalui
              Penawaran Saham Berbasis Teknologi Informasi (Equity Crowdfunding) PT Numex Teknologi
              Indonesia. Segala aktivitas investasi melalui Layanan Urun Dana mengandung risiko
              tingkat tinggi. Oleh karena itu, Pemodal wajib terlebih dahulu membaca dan memahami
              secara menyeluruh Syarat dan Ketentuan, serta seluruh dokumen yang disampaikan oleh
              ICX ICX melalui situs web dan/atau aplikasi resmi ICX sebelum melakukan keputusan
              investasi. ICX tidak pernah memberikan paksaan dalam bentuk apapun kepada Pemodal
              untuk melakukan pembelian atas Efek yang ditawarkan melalui Layanan Urun Dana. Seluruh
              investasi dilakukan secara mandiri oleh Pemodal, dengan kesadaran dan tanggung jawab
              penuh, serta tanpa pengaruh atau tekanan dari pihak mana pun. ICX selaku Penyelenggara
              Layanan Urun Dana bertindak sebagai fasilitator yang mempertemukan antara Penerbit
              dengan Pemodal, dan bukan merupakan pihak yang menjalankan kegiatan usaha dari
              Penerbit. OJK berperan sebagai regulator, pemberi izin, serta pengawas atas kegiatan
              Penawaran Efek Melalui Layanan Urun Dana Berbasis Teknologi Informasi, namun tidak
              bertindak sebagai pihak yang menjamin kelangsungan atau hasil dari investasi yang
              dilakukan. Oleh karena itu, seluruh risiko yang timbul atas keputusan investasi
              sepenuhnya menjadi tanggung jawab Pemodal. ICX TIDAK BERTANGGUNG JAWAB terhadap
              kerugian dan gugatan hukum serta segala bentuk risiko lain yang timbul di kemudian
              hari. Sejumlah risiko tersebut diantaranya:
            </Text>
            <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="sm">
              Risiko Usaha
            </Text>
            <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb={mobileScreen ? 28 : 40}>
              Risiko usaha merupakan risiko yang melekat dalam setiap kegiatan usaha dan tidak dapat
              dihindari sepenuhnya. Risiko ini mencakup, antara lain, potensi terhentinya atau
              terganggunya kegiatan usaha Penerbit secara sementara atau permanen yang disebabkan
              oleh peristiwa di luar kendali, seperti bencana alam, wabah penyakit, kebakaran,
              dan/atau keadaan kahar (force majeure) lainnya.
            </Text>
            <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="sm">
              Risiko Investasi
            </Text>
            <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb={mobileScreen ? 28 : 40}>
              Setiap bentuk investasi mengandung tingkat risiko tertentu, termasuk kemungkinan dana
              investasi yang dihimpun tidak mencapai target yang ditetapkan dan/atau proyek yang
              dijalankan oleh Penerbit tidak memberikan hasil atau keuntungan sebagaimana yang
              diproyeksikan.
            </Text>
            <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="sm">
              Risiko Likuiditas
            </Text>
            <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb={mobileScreen ? 28 : 40}>
              Investasi melalui Layanan Urun Dana pada efek bersifat ekuitas dapat memiliki tingkat
              likuiditas yang rendah, karena efek tersebut tidak tercatat di bursa efek dan/atau
              belum tersedianya pasar sekunder yang aktif. Dengan demikian, Pemodal mungkin
              menghadapi kesulitan dalam menjual kembali efek yang dimiliki kepada pihak lain dalam
              waktu yang cepat atau pada nilai yang diharapkan.
            </Text>
            <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="sm">
              Risiko Kegagalan Sistem Elektronik
            </Text>
            <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb={mobileScreen ? 28 : 16}>
              Sistem pada ICX telah dirancang dengan menggunakan teknologi elektronik dan mekanisme
              perlindungan data yang andal. Meskipun demikian, potensi terjadinya gangguan pada
              sistem teknologi informasi, termasuk namun tidak terbatas pada gangguan teknis,
              serangan siber, atau kegagalan sistem, tetap dapat terjadi dan tidak dapat sepenuhnya
              dihindari. Sebagai bentuk mitigasi terhadap risiko tersebut, ICX telah menerapkan
              kebijakan dan langkah-langkah pengamanan sistem informasi, antara lain:
            </Text>
            <List sx={{ maxWidth: '90%' }}>
              <List.Item sx={{ color: '#ADB5BD' }}>
                <Text
                  fz={mobileScreen ? 10 : 16}
                  color="#ADB5BD"
                  fw={400}
                  mb={mobileScreen ? 'xs' : 'sm'}>
                  Mengimplementasikan dan memelihara sistem manajemen keamanan informasi yang
                  mengacu pada standar internasional ISO/IEC 27001;
                </Text>
              </List.Item>
              <List.Item sx={{ color: '#ADB5BD' }}>
                <Text
                  fz={mobileScreen ? 10 : 16}
                  color="#ADB5BD"
                  fw={400}
                  mb={mobileScreen ? 'xs' : 'sm'}>
                  Mematuhi ketentuan peraturan perundang-undangan yang berlaku di Republik Indonesia
                  terkait perlindungan data pribadi dan keamanan informasi; dan
                </Text>
              </List.Item>
              <List.Item sx={{ color: '#ADB5BD' }}>
                <Text
                  fz={mobileScreen ? 10 : 16}
                  color="#ADB5BD"
                  fw={400}
                  mb={mobileScreen ? 'xs' : 'sm'}>
                  Melakukan evaluasi dan pemeliharaan secara berkala terhadap kinerja Sistem
                  Manajemen Keamanan Informasi.
                </Text>
              </List.Item>
            </List>
            <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="sm">
              Risiko Kelangkaan Pembagian Dividen dan/atau Dilusi Kepemilikan Saham, Jika Efek Yang
              Diterbitkan Merupakan Saham
            </Text>
            <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb={mobileScreen ? 28 : 40}>
              Pemodal yang berinvestasi pada Efek bersifat ekuitas berupa saham memiliki hak atas
              dividen sesuai dengan proporsi kepemilikannya, apabila Penerbit menetapkan pembagian
              dividen. Namun demikian, pembagian dividen tidak selalu dapat dilakukan secara
              periodik, dan dapat mengalami kelangkaan apabila kinerja usaha Penerbit tidak mencapai
              target atau mengalami kerugian. Selain itu, Pemodal juga menghadapi risiko dilusi
              kepemilikan apabila di kemudian hari dilakukan penerbitan saham tambahan, sehingga
              persentase kepemilikan saham oleh Pemodal dapat berkurang.
            </Text>
            <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="sm">
              Risiko Gagal Bayar
            </Text>
            <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb={mobileScreen ? 28 : 40}>
              Penawaran Efek bersifat utang memiliki risiko dimana Penerbit akan gagal bayar
              (default). Apabila Penerbit mengalami gagal bayar maka Penyelenggara berdasarkan Surat
              Kuasa akan mengundang dan mengadakan Rapat Umum Pemegang Efek Bersifat Utang (“RUP
              EBU”), dalam RUP EBU tersebut akan dibahas mengenai gagal bayar yang terjadi serta
              skema restrukturisasi jatuh tempo ataupun eksekusi jaminan fidusia dan jaminan
              Penerbit lainnya (apabila ada).
            </Text>
            <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb="sm">
              Sesuai dengan Pasal 75 Peraturan Otoritas Jasa Keuangan Nomor 17 Tahun 2025 tentang
              Penawaran Efek Melalui Layanan Urun Dana Berbasis Teknologi Informasi (“POJK
              17/2025”), kami menyatakan bahwa:
            </Text>
            <List sx={{ maxWidth: '90%' }}>
              <List.Item sx={{ color: '#ADB5BD' }}>
                <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb="sm">
                  “OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERSETUJUAN TERHADAP PENERBIT DAN TIDAK
                  MEMBERIKAN PERNYATAAN MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA
                  MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP
                  PERNYATAAN YANG BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR
                  HUKUM.”
                </Text>
              </List.Item>
              <List.Item sx={{ color: '#ADB5BD' }}>
                <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb="sm">
                  “INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN
                  SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA
                  BERKONSULTASI DENGAN PENYELENGGARA.”; dan
                </Text>
              </List.Item>
              <List.Item sx={{ color: '#ADB5BD' }}>
                <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb="sm">
                  “PENERBIT DAN PENYELENGGARA, BAIK SENDIRI MAUPUN BERSAMA-SAMA, BERTANGGUNG JAWAB
                  SEPENUHNYA ATAS KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA
                  INI.”.
                </Text>
              </List.Item>
            </List>
          </Box>
        </MediaQuery>
        <MediaQuery query="(min-width: 605px)" styles={{ display: 'none' }}>
          <Box mt={mobileScreen ? 60 : 80}>
            <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="sm">
              Disclaimer
            </Text>
            <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb="md">
              (“ICX” atau “Penyelenggara”) hadir dalam rangka mendukung program pemerintah di bidang
              perumahan dengan mengembangkan bisnis layanan urun dana bersama, dengan mempertemukan
              Pemodal dan pihak pengembang properti (“Penerbit”) (selanjutnya Pemodal dan Penerbit
              disebut bersama-sama sebagai “Pengguna”). Pada layanan urun dana ini, timbulnya
              hubungan perdata terjadi apabila Pemodal sepakat untuk membeli saham yang ditawarkan
              oleh Penerbit, sehingga segala risiko yang timbul dari hubungan tersebut akan menjadi
              tanggung jawab masing-masing pihak. Risiko yang timbul dari hak sebagai Pemodal untuk
              menerima dividen dari Penerbit merupakan risiko yang wajib ditanggung oleh Pemodal
              sesuai kebijakan dividen Penerbit. ICX hanya bertindak sebagai layanan urun dana yang
              mempertemukan antara Pemodal dengan Penerbit, dan tidak bertindak sebagai pelaku usaha
              yang menjalankan usaha untuk mengumpulkan dana terkait atau pengelola investasi
              (Penerbit). Sesuai dengan Pasal 75 Peraturan Otoritas Jasa Keuangan Nomor 17 Tahun
              2025 tentang Penawaran Efek Melalui Layanan Urun Dana Berbasis Teknologi Informasi
              (“POJK 17/2025”), kami menyatakan bahwa:
            </Text>
            <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb="md">
              a. “OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERSETUJUAN TERHADAP PENERBIT DAN TIDAK
              MEMBERIKAN PERNYATAAN MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA MENYATAKAN
              KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP PERNYATAAN YANG
              BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.”
            </Text>
            <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb="md">
              b. “INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA.
              APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI
              DENGAN PENYELENGGARA.”; dan
            </Text>
            <Text fz={mobileScreen ? 10 : 16} color="#ADB5BD" fw={400} mb="md">
              c. “PENERBIT DAN PENYELENGGARA, BAIK SENDIRI MAUPUN BERSAMA-SAMA, BERTANGGUNG JAWAB
              SEPENUHNYA ATAS KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA
              INI.”.
            </Text>
          </Box>
        </MediaQuery>
      </Container>
      <Box sx={{ backgroundColor: '#000' }} py={24}>
        <Container size="ll">
          <Text fz={mobileScreen ? 8 : 14} fw={400} color="#FFF">
            {mobileScreen ? (
              <Center>© 2025 PT ICX bangun Indonesia. All Rights Reserved.</Center>
            ) : (
              '© 2025 PT ICX bangun Indonesia. All Rights Reserved.'
            )}
          </Text>
        </Container>
      </Box>
    </footer>
  );
};
