import { useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();
  const {loadingInitial, loadActivities} = activityStore;

  useEffect(() => {
    console.log('calling loading data')
    loadActivities();
  }, [loadActivities])

  if(loadingInitial) return <LoadingComponent content='Loading app' inverted={false} />

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard />
      </Container>
      
    </>
  )
}

export default observer(App);
