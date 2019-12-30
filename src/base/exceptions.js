/*
	model name:
 */

export function ArgumentException(Message){
	return new java.lang.IllegalArgumentException(Message);
}

export function SystemException(Message) {
	return new java.lang.Exception(Message);
}
