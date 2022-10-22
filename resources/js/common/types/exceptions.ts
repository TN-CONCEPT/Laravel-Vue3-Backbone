class IException {
    protected message: string | null | undefined;

    constructor() {

    }
}

class UnauthorizedException extends IException{}
class UnauthenticatedException extends IException{}
class ServerErrorException extends IException{}

export {UnauthorizedException, UnauthenticatedException, ServerErrorException}