import { useCallback, useState } from 'react';

export type Status = 'idle' | 'loading' | 'success' | 'error';

export function useStatus(initial: Status = 'idle') {
  const [status, setStatus] = useState<Status>(initial);

  const setTo = useCallback((next: Status) => {
    setStatus(next);
  }, []);

  const setIdle = useCallback(() => setTo('idle'), [setTo]);
  const setLoading = useCallback(() => setTo('loading'), [setTo]);
  const setSuccess = useCallback(() => setTo('success'), [setTo]);
  const setError = useCallback(() => setTo('error'), [setTo]);

  const isIdle = status === 'idle';
  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  return {
    status,
    setStatus: setTo,
    setIdle,
    setLoading,
    setSuccess,
    setError,
    isIdle,
    isLoading,
    isSuccess,
    isError,
  };
}
