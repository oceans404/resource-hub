import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

const initialValues = {
  tags: [
    {
      name: '',
    },
  ],
};

const BasicForm = (props) => {
  const { submitUserTags, canSubmit } = props;
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => submitUserTags(values)}
      >
        {({ values }) => (
          <Form>
            <FieldArray name='tags'>
              {({ insert, remove, push }) => (
                <div>
                  {values.tags.length > 0 &&
                    values.tags.map((friend, index) => (
                      <div className='row my-2' key={index}>
                        <label htmlFor={`tags.${index}.name`}>Tag</label>
                        <Field
                          className='mx-2'
                          name={`tags.${index}.name`}
                          type='text'
                        />
                        <ErrorMessage
                          name={`tags.${index}.name`}
                          component='div'
                          className='field-error'
                        />

                        <button
                          type='button'
                          className='secondary'
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    ))}
                  {/* {values.tags.length < 3 && (
                    <button
                      type='button'
                      className='secondary'
                      onClick={() => push({ name: '' })}
                    >
                      Add another tag
                    </button>
                  )} */}
                </div>
              )}
            </FieldArray>

            <button
              className={`block my-4 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                canSubmit
                  ? 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white bg-blue-700 hover:bg-blue-800'
                  : 'ring-red-700'
              }`}
              type='submit'
              disabled={!canSubmit}
            >
              Post Metadata On Chain
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicForm;
