# Translation Bug Investigation

The goal is to identify why the backend translation API is returning a 500 error.

## Steps to Debug:
1. Start backend and pipe output to a log file.
2. Trigger a translation request from the browser or curl.
3. Read the log file to see the stack trace.
4. If it's a library issue (google-translate-api-x), consider alternatives or fixes.

## Hypothesis:
- Rate limiting by Google.
- Change in Google's internal API causing the library to fail.
- Incorrect parameters being passed to the library.
