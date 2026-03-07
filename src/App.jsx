import './App.css'

function Profile({name, age, isStudent}) {
  return (
    <>
      <h2>{name}</h2>
      <p>年齢：{age}</p>
      <p>{isStudent ? '学生' : '社会人'}</p>
    </>
  )
}

function App() {

  return (
    <>
      <Profile name="田中太郎" age={20} isStudent={true}/>
      <Profile name="佐藤次郎" age={40} isStudent={false}/>
    </>
  )
}

export default App
