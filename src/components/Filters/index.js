import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../../redux/action';

const { Search } = Input;

export default function Filters() {

  const dispatch = useDispatch();
  const [searchText, setsearchText] = useState('')
  const [filterStatus, setfilterStatus] = useState('All')
  const [filterPriority, setfilterPriority] = useState([])
  return (
    <Row justify='center'>
      {/* Search Filter  */}
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder='input search text' value={searchText}
          onChange={e => {
            setsearchText(e.target.value)
            dispatch(searchFilterChange(e.target.value))
          }}

        />
      </Col>
      {/* Filter by Status  */}
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group
          value={filterStatus}
          onChange={e => {
            //  
            setfilterStatus(e.target.value)
            dispatch(statusFilterChange(e.target.value))
          }
          }
        >
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      {/* Filter by Priority */}
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value = {filterPriority}
          onChange={e => { 
            setfilterPriority(e) 
            dispatch(priorityFilterChange(e))
          }}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}