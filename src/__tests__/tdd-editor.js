import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import user from '@testing-library/user-event'
import {Redirect as MockRedirect} from 'react-router'
import {Editor} from '../tdd-editor'

jest.mock('react-router', () => {
  return {
    Redirect: jest.fn(() => null),
  }
})

afterEach(() => {
  jest.clearAllMocks()
})

test('Renders a form with title, content, tags, and a submit button', async () => {
  const fakePost = {
    title: 'Test title',
    content: 'Test content',
    tags: 'tag1, tag2',
    id: '123456',
  }
  const fakeUser = {
    userId: 'Test user id',
  }
  const useIdMock = jest.fn().mockReturnValueOnce(fakePost.id)

  render(<Editor {...fakeUser} useId={useIdMock} />)

  screen.getByLabelText(/title/i).value = fakePost.title
  screen.getByLabelText(/content/i).value = fakePost.content
  screen.getByLabelText(/tags/i).value = fakePost.tags

  const submitButton = screen.getByText(/submit/i)
  user.click(submitButton)
  expect(submitButton).toBeDisabled()

  await waitFor(() => {
    expect(screen.getByText(fakePost.title)).toBeInTheDocument()
  })

  expect(screen.getByText(fakePost.content)).toBeInTheDocument()
  expect(screen.getByText(fakePost.tags)).toBeInTheDocument()
  expect(screen.getByText(fakePost.id)).toBeInTheDocument()
  expect(screen.getByText(fakeUser.userId)).toBeInTheDocument()

  await waitFor(() => {
    expect(MockRedirect).toHaveBeenCalledWith({to: '/'}, {})
  })
})