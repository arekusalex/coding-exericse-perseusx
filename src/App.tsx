import React from "react";
import "./App.css";
import { Layout, Space, Table, TableColumnsType, Tag, Typography } from "antd";
import { addCurrentDate, type User, users } from "./script";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

// Add current date to each user object
const updatedUsers = addCurrentDate(users);

function App() {
  // Define table columns
  const columns: TableColumnsType<User> = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.localeCompare(b.name), // Sort by name
    },
    {
      key: "favoriteFood",
      title: "Favorite Food",
      dataIndex: "favoriteFood",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.favoriteFood.localeCompare(b.favoriteFood), // Sort by favorite food
    },
    {
      key: "favoriteMovie",
      title: "Favorite Movie",
      dataIndex: "favoriteMovie",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.favoriteMovie.localeCompare(b.favoriteMovie), // Sort by favorite movie
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
      filters: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" },
      ], // Define filter options
      onFilter: (value, record) => record.status === value, // Filter by status
      render: (_, record) => (
        <Tag
          key={record.key}
          color={record.status === "Active" ? "green" : "red"}
        >
          {record.status}
        </Tag>
      ),
    },
    {
      key: "lastUpdated",
      title: "Last Updated",
      dataIndex: "lastUpdated",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.lastUpdated!.localeCompare(b.lastUpdated!), // Sort by last updated date
    },
  ];

  // Render the app layout
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Title style={{ color: "#fff" }}>User Monitor App</Title>
      </Header>
      <Content style={{ padding: "50px 50px", flex: 1 }}>
        <Space style={{ padding: "16px 0" }}>
          <Text>
            The following table displays user data. Each column header contains
            buttons for sorting the data. A filter in the{" "}
            <Text strong>Status</Text> column allows users to filter the table
            based on user status (Active/Inactive).{" "}
          </Text>
        </Space>
        <Table columns={columns} dataSource={updatedUsers} pagination={false} />
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        My App ©{new Date().getFullYear()} Created by Edwin Leiva
      </Footer>
    </Layout>
  );
}

export default App;
