
import { Inter } from '@next/font/google'
import { Layout } from '@/components/layouts'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import styles from '@/styles/Home.module.css'
import { EntryList, NewEntry } from '@/components/ui'



const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {

  const cardStyle = {
    height: 'calc(100vh - 100px)',

  }
  return (
    <Layout title='Home - Clon de Trello'>
        
        <Grid container spacing={2}>
          <Grid item xs={ 12 } sm={ 4 } md={ 4 } lg={ 4 } >
            <Card sx={cardStyle}>
              <CardHeader title='Pendientes' />
              <CardContent>
                <NewEntry />
                <EntryList status='pending' />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={ 12 } sm={ 4 } md={ 4 } lg={ 4 }>
            <Card sx={cardStyle}>
              <CardHeader title='En progreso'  />
              <CardContent>
                <EntryList status='in-progress' />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={ 12 } sm={ 4 } md={ 4 } lg={ 4 }>
            <Card sx={cardStyle}>
              <CardHeader title='Completadas'  />
              <CardContent>
                <EntryList  status='finished'/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

    </Layout>
  )
}
