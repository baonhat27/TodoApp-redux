import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/action';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todoDisplaySelector } from '../../redux/selectors';

export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')
  
  
  // Selector lay ra du lieu tu kho chung
  const todoList = useSelector(todoDisplaySelector)

  const handleAddButtonClick = () => {
    dispatch(addTodo({ id: uuidv4(), name: todoName, completed: false, priority: priority }))
    setPriority('Medium')
    setTodoName('')
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' priority='High' />
        <Todo name='Learn Redux' priority='Medium' />
        <Todo name='Learn JavaScript' priority='Low' />  */
          todoList.map(todo => <Todo
            id ={todo.id}
            key={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />)
        }

      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input
            value={todoName}
            onChange={e => setTodoName(e.target.value)}
          />
          <Select defaultValue="Medium" value={priority} onChange={value => setPriority(value)}>
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
          <Button
            type='primary'
            onClick={handleAddButtonClick}
          >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}