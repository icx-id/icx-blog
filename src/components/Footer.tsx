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
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'gatsby';

const useStyles = createStyles(theme => ({
  footer: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colors.dark[6],
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
      <Container size="lg" pb={mobileScreen ? 42 : 84}>
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
                <Text className={classes.subtitle} fz={mobileScreen ? 12 : 14}>
                  BEI Tower 1 Lt. 17, Unit 1709 Jl. Jend. Sudirman Kav. 52-53 Senayan, Kby. Baru
                  Jakarta Selatan 12190
                </Text>
              </Box>
              <Box>
                <Grid mt="xl" mb={mobileScreen ? 28 : 33}>
                  <Col span="auto">
                    <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="md">
                      Telephone
                    </Text>
                    <Text className={classes.subtitle} fz={mobileScreen ? 12 : 14}>
                      +62 21 22455061
                    </Text>
                  </Col>
                  <Col span="auto">
                    <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="md">
                      WhatsApp
                    </Text>
                    <Text className={classes.subtitle} fz={mobileScreen ? 12 : 14}>
                      +62 21 22455061
                    </Text>
                  </Col>
                  <Col span="auto">
                    <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="md">
                      Email
                    </Text>
                    <Text className={classes.subtitle} fz={mobileScreen ? 12 : 14}>
                      cs@icx.id
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
                  />
                  <Image
                    sx={{ cursor: 'pointer' }}
                    src="/img/instagram.png"
                    height={24}
                    width={24}
                    onClick={() => window.open('https://www.instagram.com/landx.id/', '_blank')}
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
                <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                  Home
                </Text>
                <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                  Projects
                </Text>
                <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                  Why ICX
                </Text>
                <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                  Blog
                </Text>
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
                <Link to="/tata-kelola/mitigasi-resiko" style={{ textDecoration: 'none' }}>
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
                <Link to="/tata-kelola/faq" style={{ textDecoration: 'none' }}>
                  <Text className={classes.content} fz={mobileScreen ? 14 : 16} mb="sm">
                    FAQ
                  </Text>
                </Link>
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
                      src="/img/playstore-logo.png"
                      height={mobileScreen ? 'auto' : 55}
                      width={mobileScreen ? 220 : 'auto'}
                      mb="sm"
                      sx={{ cursor: 'pointer' }}
                      fit="contain"
                    />
                    <Image
                      src="/img/appstore-logo.png"
                      height={mobileScreen ? 'auto' : 55}
                      width={mobileScreen ? 220 : 'auto'}
                      sx={{ cursor: 'pointer' }}
                      fit="contain"
                    />
                  </Box>
                  <Grid mt="lg">
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
                </Box>
              </Box>
            </Col>
          </Grid>
        </Box>
        <Box mt={mobileScreen ? 60 : 80}>
          <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="sm">
            Disclaimer
          </Text>
          <Text fz={mobileScreen ? 10 : 16} color="#FFF" fw={400} mb={mobileScreen ? 28 : 68}>
            PT ICX BANGUN INDONESIA (selanjutnya disebut “ICX”) adalah Perusahaan yang didirikan
            berdasarkan Hukum Indonesia yang bertindak sebagai Penyelenggara Layanan Urun Dana
            Melalui Penawaran Efek Berbasis Teknologi Informasi yang telah berizin dan diawasi oleh
            Otoritas Jasa Keuangan (OJK) berdasarkan Keputusan Dewan Komisioner OJK Nomor
            Kep-068/D.04/2020 tentang Pemberian Izin Usaha Penyelenggara Layanan Urun Dana Melalui
            Penawaran Efek Berbasis Teknologi Informasi PT Numex Teknologi Indonesia. Kegiatan
            Investasi melalui Layanan Urun Dana memil iki tingkat risiko tinggi, Pemodal diwajibkan
            telah membaca Syarat dan Ketentuan serta seluruh dokumen yang dipaparkan oleh LandX
            melalui website dan/atau aplikasi LandX. LandX tidak pernah memaksa Pemodal untuk
            melakukan pembelian Efek yang sedang ditawarkan. Segala transaksi yang dilakukan oleh
            Pemodal dilakukan oleh Pemodal dengan kesadaran penuh dan tanpa paksaan dari Pihak
            manapun. LandX berperan sebagai Penyelenggara Layanan Urun Dana dalam melakukan kegiatan
            Penawaran Efek Melalui Layanan Urun Dana Berbasis Teknologi Informasi yang mempertemukan
            antara Penerbit dengan Pemodal. OJK bertindak sebagai regulator dan pemberi izin serta
            pengawas, tidak sebagai penjamin investasi. Segala risiko menjadi tanggung jawab penuh
            dari Pemodal. Pemodal telah menyadari secara penuh bahwa terdapat sejumlah risiko dalam
            melakukan investasi pada layanan urun dana. Oleh karena itu, LANDX TIDAK BERTANGGUNG
            JAWAB terhadap kerugian dan gugatan hukum serta segala bentuk risiko lain yang timbul di
            kemudian hari. Sejumlah risiko tersebut diantaranya:
          </Text>
          <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="sm">
            Risiko Usaha
          </Text>
          <Text fz={mobileScreen ? 10 : 16} color="#FFF" fw={400} mb={mobileScreen ? 28 : 68}>
            Risiko usaha merupakan hal yang tidak dapat dihindari dalam menjalankan kegiatan usaha.
            Sejumlah risiko usaha yang mungkin saja terjadi adalah penutupan kegiatan usaha secara
            sementara sebagai dampak dari adanya bencana alam dan/atau keadaan kahar lainnya. Risiko
            Kerugian Investasi Setiap investasi memiliki tingkat risiko yang beragam, salah satunya
            adalah tidak terkumpulnya dana investasi sesuai proyeksi yang telah ditetapkan dan/atau
            proyek yang dijalankan tidak menghasilkan keuntungan sesuai dengan yang ditargetkan.
          </Text>
          <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="sm">
            Risiko Kekurangan Likuiditas
          </Text>
          <Text fz={mobileScreen ? 10 : 16} color="#FFF" fw={400} mb={mobileScreen ? 28 : 68}>
            Pemodal yang melakukan investasi memungkinkan dalam bentuk tidak likuid karena efek
            bersifat ekuitas yang ditawarkan tidak terdaftar di bursa efek atau belum dilaksanakan
            pasar sekunder. Hal ini berarti Pemodal mungkin tidak dapat dengan mudah menjual saham
            miliknya kepada pihak lain. Risiko Kelangkaan Pembagian Dividen dan/atau Dilusi
            Kepemilikan Saham Jika Efek Yang Diterbitkan Merupakan Saham Setiap Pemodal yang
            melakukan investasi pada efek bersifat ekuitas berupa saham, memiliki hak untuk mendapat
            dividen sesuai dengan jumlah kepemilikan yang dimiliki yang dibagikan oleh Penerbit
            melalui Penyelenggara secara periodik. Namun, kelangkaan dalam pembagian dividen
            dimungkinkan terjadi karena kinerja bisnis suatu proyek yang diinvestasikan tidak
            berjalan sebagaimana mestinya serta berpotensi terdilusi kepemilikan saham karena
            bertambahnya total saham yang beredar atau ditawarkan.
          </Text>
          <Text className={classes.title} fz={mobileScreen ? 14 : 16} mb="sm">
            Risiko Gagal Bayar
          </Text>
          <Text fz={mobileScreen ? 10 : 16} color="#FFF" fw={400} mb={mobileScreen ? 28 : 68}>
            Penawaran Efek bersifat utang atau sukuk memiliki risiko dimana Penerbit akan gagal
            bayar (default). Apabila Penerbit mengalami gagal bayar maka Wali Amanat berdasarkan
            Surat Kuasa akan mengundang dan mengadakan Rapat Umum Pemegang Obligasi (RUPO), dalam
            RUPO tersebut akan dibahas mengenai gagal bayar yang terjadi serta skema perpanjangan
            jatuh tempo kupon ataupun eksekusi jaminan fidusia dan jaminan Penerbit lainnya (apabila
            ada). Risiko Kegagalan Sistem Elektronik
          </Text>
          <Text fz={mobileScreen ? 10 : 16} color="#FFF" fw={400} mb="sm">
            Sistem pada LandX sudah menerapkan sistem elektronik dan keamanan data yang handal.
            Namun gangguan sistem teknologi informasi dan kegagalan sistem mungkin saja tetap
            terjadi. Untuk mencegah hal tersebut terjadi, LandX telah memiliki sejumlah kebijakan
            keamanan informasi diantaranya:
          </Text>
          <List sx={{ maxWidth: '90%' }}>
            <List.Item sx={{ color: '#FFF' }}>
              <Text
                fz={mobileScreen ? 10 : 16}
                color="#FFF"
                fw={400}
                mb={mobileScreen ? 'xs' : 'sm'}>
                Mengimplementasikan dan menerapkan ISO 27001
              </Text>
            </List.Item>
            <List.Item sx={{ color: '#FFF' }}>
              <Text
                fz={mobileScreen ? 10 : 16}
                color="#FFF"
                fw={400}
                mb={mobileScreen ? 'xs' : 'sm'}>
                Menaati segala ketentuan peraturan perundang-undangan terkait keamanan data pribadi
                dan informasi yang berlaku di Republik Indonesia;
              </Text>
            </List.Item>
            <List.Item sx={{ color: '#FFF' }}>
              <Text
                fz={mobileScreen ? 10 : 16}
                color="#FFF"
                fw={400}
                mb={mobileScreen ? 'xs' : 'sm'}>
                Melakukan perbaikan secara berkala terhadap kinerja Sistem Manajemen Keamanan
                Informasi.
              </Text>
            </List.Item>
          </List>
          <Text fz={mobileScreen ? 10 : 16} color="#FFF" fw={400} mb="sm">
            Sesuai dengan pasal 27 Peraturan Otoritas Jasa Keuangan Nomor 57/POJK.04/2020 tentang
            Penawaran Efek Melalui Layanan Urun Dana Berbasis Teknologi Informasi (“POJK 57/2020”),
            kami menyatakan bahwa:
          </Text>
          <List sx={{ maxWidth: '90%' }}>
            <List.Item sx={{ color: '#FFF' }}>
              <Text fz={mobileScreen ? 10 : 16} color="#FFF" fw={400} mb="sm">
                OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERSETUJUAN TERHADAP PENERBIT DAN TIDAK
                MEMBERIKAN PERNYATAAN MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA
                MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP
                PERNYATAAN YANG BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM;
              </Text>
            </List.Item>
            <List.Item sx={{ color: '#FFF' }}>
              <Text fz={mobileScreen ? 10 : 16} color="#FFF" fw={400} mb="sm">
                “INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA.
                APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI
                DENGAN PENYELENGGARA;
              </Text>
            </List.Item>
            <List.Item sx={{ color: '#FFF' }}>
              <Text fz={mobileScreen ? 10 : 16} color="#FFF" fw={400} mb="sm">
                “PENERBIT DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI MAUPUN BERSAMA-SAMA, BERTANGGUNG
                JAWAB SEPENUHNYA ATAS KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN
                DANA INI.
              </Text>
            </List.Item>
          </List>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: '#000' }} py={24}>
        <Container size="lg">
          <Text fz={mobileScreen ? 8 : 14} fw={400} color="#FFF">
            {mobileScreen ? (
              <Center>© 2023 PT ICX bangun Indonesia. All Rights Reserved.</Center>
            ) : (
              '© 2023 PT ICX bangun Indonesia. All Rights Reserved.'
            )}
          </Text>
        </Container>
      </Box>
    </footer>
  );
};
