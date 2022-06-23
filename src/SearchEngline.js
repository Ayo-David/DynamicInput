import React, { useEffect, useState } from 'react'
import { books } from './books'

const SearchEngine = () => {
    const [searchSuggestion, setSearchSuggestion] = useState([])
    const [thebooks, setThebooks] = useState(books)

    const fields = ['authour', 'title', 'country', 'language', 'year'];




    const [input, setInput] = useState({
        author: "",
        country: "",
        language: "",
        pages: 0,
        title: "",
        year: 0
    })

    const handleChange = (e) => {
        const inputText = e.target.name
        const valueText = e.target.value
        console.log(valueText)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        const upperCase = valueText.toUpperCase()

        //searchSuggestion.length === 0 && setSearchSuggestion([...books])

        const suggested = thebooks.filter(({ author, country, language, pages, title, year }) => {
            if (inputText === 'author') {
                return author.toLowerCase().indexOf(valueText.toLowerCase()) > -1
            } else if (inputText === 'country') {
                return country.toLowerCase().indexOf(valueText.toLowerCase()) > -1
            } else {
                return language.toLowerCase().indexOf(valueText.toLowerCase()) > -1
            }

        }
        )
        setSearchSuggestion(suggested)
        setThebooks(suggested)
        //console.log('found',)
    }

    useEffect(() => {
        //console.log(input.title)
        //setSearchSuggestion([...books])

        // fields.reduce((a, e) => {
        //     console.log('returned value', a)
        //     console.log('received', e)
        //     a[e] = '';
        //     return a;
        // }, {})

    }, [])

    return (
        <div>
            <h1>Search for Books</h1>
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



