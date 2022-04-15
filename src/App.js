import { useState } from 'react';
import Navbar from './components/Navbar';
import Editor from '@monaco-editor/react';
import Loader from './components/Loader';
import Axios from 'axios';

function App() {
  const [userCode, setUserCode] = useState(``);
  const [userLang, setUserLang] = useState('python');
  const [userTheme, setUserTheme] = useState('vs-dark');
  const [fontSize, setFontSize] = useState('SMALL');
  const [userInput, setUserInput] = useState('');
  const [userOutput, setUserOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const compile = () => {
    setLoading(true);
    if (userCode === ``) {
      return;
    }

    Axios.post(`http://localhost:8000/compile`, {
      code: userCode,
      language: userLang,
      input: userInput,
    })
      .then((res) => {
        console.log(res.data.output);
        setUserOutput(res.data.output);
      })
      .then(() => {
        setLoading(false);
      });
  };

  const clearOutput = () => {
    setUserOutput('');
  };

  const options = {
    fontSize: fontSize,
  };

  return (
    <div className='bg-gray-100'>
      <Navbar
        userLang={userLang}
        setUserLang={setUserLang}
        userTheme={userTheme}
        setUserTheme={setUserTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <div className='md:flex justify-evenly'>
        <div className='md:w-8/12 w-full relative'>
          <Editor
            options={options}
            width='100%'
            height='calc(100vh - 100px)'
            loading={<Loader />}
            theme={userTheme}
            language={userLang}
            defaultLanguage='java'
            defaultValue="/*Enter your code here*/"
            onChange={(value) => {
              setUserCode(value);
            }}
          />
          <button
            className='bg-green-300 bottom-4 md:bottom-6 right-16 px-6 py-2 font-bold rounded absolute'
            onClick={() => compile()}
          >
            Run
          </button>
        </div>

        <div className='m-3 flex md:block gap-4'>
          <div className=''>
            <div className='font-bold'>Input</div>
            <div className='max-w-full'>
              <textarea
                cols='30'
                rows='10'
                onChange={(e) => setUserInput(e.target.value)}
                className='border-2 border-gray-400 mt-3 resize-x'
              ></textarea>
            </div>
          </div>

          <div className='md:mt-5 w-full'>
            <div className='flex justify-between items-center'>
              <h4 className='font-bold'>Output</h4>
              <button
                onClick={() => {
                  clearOutput();
                }}
                className=' bg-red-300 px-2 py-1 rounded font-bold'
              >
                Clear
              </button>
            </div>
            {loading ? (
              <Loader />
            ) : (
              <div className=''>
                <pre className='whitespace-pre-wrap h-14'>{userOutput}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
