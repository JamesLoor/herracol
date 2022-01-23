import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Link from '../components/Link'
import { questions } from '../data/question.data'
import { Wrapper } from '../globalStyles'
import { theme } from '../theme'
import ReactMarkdown  from 'react-markdown'

const QuestionStyled = styled.div`
  .faq {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 70px;
  }

  .faq__question {
    display: grid;
    grid-gap: 20px;
  }

  .answer {
    width: 100%;
  }

  .faq__menu {
    display: none;
  }

  .question__title {
    font-size: 32px;
    font-weight: 1000;
  }

  .faq__footer {
    border-top: 1px solid ${theme.colors.secundaryLight};
    padding: 20px 0;
  }

  .footer__links {
    display: grid;
    grid-gap: 10px;
  }
`

const Question = () => {
  const { id } = useParams()
  const question = questions[id - 1]

  return (
    <QuestionStyled>
      <Wrapper>
        <div className="faq">
          <div className="faq__question">
            <h1 className="question__title">{question.question}</h1>
            <div className="answer">
              <ReactMarkdown >
                {question.answer}
              </ReactMarkdown>
            </div>
          </div>

          <div className="faq__menu">
            <h2 className="menu__title">Preguntas frecuentes</h2>
            <ul>
              {questions.map(q => {
                return (
                  <li key={q.id}>
                    <Link to={q.url}>{q.question}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Wrapper>

      <footer className="faq__footer">
        <Wrapper>
          <div className="footer__links">
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/privacidad">Política de privacidad</Link>
            <Link to="/terminos">Términos y condiciones</Link>
          </div>
        </Wrapper>
      </footer>
    </QuestionStyled>
  )
}

export default Question
