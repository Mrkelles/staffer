'use client';

import { useEditor, EditorContent } from '@tiptap/react'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'
import { Menubar } from './MenuBar'

export default function Editor({field}: {field:any} ) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],    
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            field.onChange(JSON.stringify(editor.getJSON()));
        },     
        content: field.value ? JSON.parse(field.value) : '<p>No Field Value, I guess</p>', 
        editorProps: {
            attributes: {
                class: 'min-h-[300px] p-4 prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert !w-full !max-w-none',
            },
        },
    })

    return (
        <div className='w-full border border-input rounded-lg overflow-hidden dark:bg-input/30'>
            <Menubar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}