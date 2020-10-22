import { ReduxAppBase, reduxRender } from '@feizheng/next-react-redux';

@reduxRender('root', { prefix: 'cra-nx' })
export default class extends ReduxAppBase {
  static initialState(inStore) {
    const { login } = inStore.local;
    return {
      local: {
        login: login || null
      }
    };
  }

  render() {
    return (
      <Router ref={(root) => (this.root = root)}>
        <Switch>{renderRoutes(routes)}</Switch>
      </Router>
    );
  }
}
