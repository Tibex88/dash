import React from 'react'

import { RichTextEditorComponent, Toolbar, Inject, Image,Link,
 QuickToolbar, 
 HtmlEditor} from '@syncfusion/ej2-react-richtexteditor'

 import { EditorData } from '../data/dummy'
import {Header} from '../components'


function Editor() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category="App" title="WYSIWYG"  />
      <RichTextEditorComponent>
          <EditorData />
        <Inject services={[Image,Toolbar,QuickToolbar, Link, HtmlEditor]} />
      </RichTextEditorComponent>
    </div>

  )
}

export default Editor