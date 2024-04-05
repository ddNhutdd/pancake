import { memo } from "react";

function NoUser() {
	const classImage = {
		with: '25px',
		height: '25px',
		borderRadius: '50%'
	}
  return (
    <img style={classImage} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA49JREFUeF7t3bFtFVEQRuH79HpwSgNOCZFoA4lOaAeJLiwkQqdugNQ9GFPEFwzDHufjd332+J+56+vd29PL4/uBr88/XqH6nJ9fHqj+/v0D1Wvx29ff9C2m+d0SgK7fSYASgAwqAWoBJJC20FoA4T+1gOkIawi0IboEKAHaBooD7QLaBYg/Z7qF1gLo8jUEjhvcENgQiL/DVt4M0AxABjUDdCeQBOpOYH8NJIHaBRC+/2AX8OfbA50HQH7n19tH+haf7s9Ur8Xb139LAFMgAYxfCTCcYCXAxQVOgARoCBQHmgGE3jnNAM0AbQPxd4jKmwEI3/4ES4AEaAgUBxoChV5D4Jm+lV0LuLjACZAAzQDiQDOA0GsGmJ8B9N/D8fpzuZ6p0wXokSz9fK3nE0G6AK1PACOYAMaPn3CCH8/lCYAIawEIUMtrAUawBDB+tQDkx+UlgCEsAYxfCYD8uLwEMIQlgPErAZAfl5cAhrAEMH4lAPLj8hLAEJYAxq8EQH5cXgIYwhLA+JUAyI+fMqYncnT9eqhz+o9J4wmgEZ4ApnACGD8+0lUC4GPmSgAzuAQwfiUA8msIxOckKv8SAAm2C0CA7QLsYc+I/5QASLAEQIAlQAlACrUNJHy1AMN32gYqwFpALYAcqgUQvlqA4asFKL/uBF79TqAatP2tYfrza/34jSD9ARLACCaA8eO3h+PHc3kCIEJ9byB+PJcnACJMAASo5c0ARrAEMH7NAMiPy0sAQ1gCGL8SAPlxeQlgCEsA41cCID8uLwEMYQlg/EoA5MflJYAhLAGMXwmA/Li8BDCE/MqY6f9utR9/f7WeqUyA5Q4kwPILqMtPACW4vD4Bll9AXX4CKMHl9Qmw/ALq8hNACS6vT4DlF1CXnwBKcHl9Aiy/gLr8BFCCy+sTYPkF1OUngBJcXp8Ayy+gLj8BlODyehbg6eXxXRjogQx9zp6s/V+o1Ufc6P8m8pGwBDCNEuD+bASXVydAApDCtQDCN19cApQAZGEJQPjmi0uAEoAsLAEI33xxCVACkIUlAOGbLy4BSgCysAQgfPPFJUAJQBaWAIRvvrgEKAHIwvEEoNWfwy+MmH4+gR7ImF4/nwdIgFdCkAD4+vhpgCUA+V8LmBa4FnBxgRMgAexUMPJrF3D118ZtH6K2r78WgBGWABcHmAAJQATaBnYjiATS4mYAJFgLuDjABEgAItAM0AxAAmnxX+xa+U4YKjjvAAAAAElFTkSuQmCC" alt="no-user" />
  );
}

export default memo(NoUser);