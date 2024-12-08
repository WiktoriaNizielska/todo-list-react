import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavigation, StyledNavLink } from './styled';


export default () => (
  <HashRouter>
    <nav>
      <StyledNavigation>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/author">O autorze</StyledNavLink>
        </li>
      </StyledNavigation>
    </nav>
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/author">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);