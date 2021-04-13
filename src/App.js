import "./App.css";
import Compressor from "./Compressor";
import { Layout, Typography } from "antd";

function App() {
  const { Header, Content } = Layout;
  const { Title } = Typography;

  return (
    <Layout className="layout">
      <Header>
        <div className="header">
          <Title>Compressor Demo</Title>
        </div>
      </Header>
      <Content>
        <div className="content">
          <Compressor />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
