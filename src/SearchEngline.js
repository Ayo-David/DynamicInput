import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { books } from './books'
import Todo from './Todo'
import OrderList from './OrderList'
import { useLocation } from 'react-router-dom'

const SearchEngine = () => {

    const [searchSuggestion, setSearchSuggestion] = useState([])
    const [thebooks, setThebooks] = useState(books)
    const [inputText, setInputText] = useState('')

    const { search } = useLocation()
    const match = search.match(/type=(.*)/)
    const type = match?.[1]

    const fields = ['authour', 'title', 'country', 'language', 'year'];




    const [input, setInput] = useState({
        author: "",
        country: "",
        language: "",
        pages: "",
        title: "",
        year: ""
    })

    const handleChange = (e) => {
        const field = e.target.name
        const valueText = e.target.value
        console.log(valueText)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setInputText(field)

        //const upperCase = valueText.toUpperCase()

        //searchSuggestion.length === 0 && setSearchSuggestion([...books])

        //console.log('found',)
        // handleSearch()
    }

    const handleSearch = useMemo(() => {
        const suggested = thebooks.filter(({ author, country, language, pages, title, year }) =>  {
            if (inputText === 'author') {
                if (input.author !== '')
                    return author.toLowerCase().indexOf(input.author.toLowerCase()) > -1
            } else if (inputText === 'country') {
                if (input.country !== '')
                    return country.toLowerCase().indexOf(input.country.toLowerCase()) > -1
            } else if (inputText === 'language') {
                if (input.language !== '')
                    return language.toLowerCase().indexOf(input.language.toLowerCase()) > -1
            } else if (inputText === 'pages') {
                //let arrayPages = [pages]
                //console.log(`arrayPages = `, arrayPages)
                if (input.pages !== '')
                    return pages === parseInt(input.pages)
            } else if (inputText === 'title') {
                if (input.title !== '')
                    return title.toLowerCase().indexOf(input.title.toLowerCase()) > -1
            } else if (inputText === 'year') {
                if (input.year !== '')
                    return year === parseInt(input.year)
            }
        }, [inputText, input])

        console.log(`suggested = `, suggested)
        setSearchSuggestion(suggested)
        //setThebooks(suggested)
    }, [inputText, input, thebooks])

    useEffect(() => {
        //handleSearch()
        //setThebooks(searchSuggestion)
        // if (input.author === "" && input.country === "" && input.title === "") {
        //     setThebooks(books)
        // } else {

        //     setThebooks(suggested)
        // }

    }, [searchSuggestion])



    useEffect(() => {
        // if (input.author === "" && input.country === "" && input.title === "") {
        //     setThebooks(books)
        // } else {

        //     setThebooks(searchSuggestion)
        // }
        //console.log(input.title)
        //setSearchSuggestion([...books])

        // fields.reduce((a, e) => {
        //     console.log('returned value', a)
        //     console.log('received', e)
        //     a[e] = '';
        //     return a;
        // }, {})

    }, [input])

    return (
        <div>
            <h1>Search for Books</h1>
            {
                type === 'order' ? <OrderList /> :
                    type === 'todo' && <Todo />
            }
            <SearchInput title="author" value={input.author} onChange={handleChange} />
            <SearchInput title="country" value={input.country} onChange={handleChange} />
            <SearchInput title="language" value={input.language} onChange={handleChange} />
            <SearchInput title="pages" value={input.pages} onChange={handleChange} />
            <SearchInput title="title" value={input.title} onChange={handleChange} />
            <SearchInput title="year" value={input.year} onChange={handleChange} />
            <div>
                {
                    searchSuggestion.map((book, i) => {
                        const { author, country, ...rest } = book
                        return (
                            <p key={i}>
                                <label>Author: {author}</label>
                                <label> Country: {country}</label>
                                <label> Language: {rest.language}</label>
                                <label> Pages: {book.pages}</label>
                                <label> Title:  {book.title}</label>
                                <label> Year:  {book.year}</label>
                            </p>

                        )
                    }
                    )
                }
            </div>
        </div>

    )

}

const SearchInput = ({ title, ...rest }) => {
    // const [input, setInput] = useState('')
    // useEffect(() => {
    //     console.log(input)
    // }, [input])
    return (
        <div style={{ display: 'flex', margin: '5px 0 5px 0' }}>
            <div style={{ width: '100px' }}>
                <label >{title}</label>
            </div>

            <input type="text" value={rest.value} onChange={rest.onChange} name={title} />
        </div>
    )
}

export default SearchEngine



