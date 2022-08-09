import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_BlogInput } from "../inputs/UserCreateWithoutFK_BlogInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_BlogInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_BlogInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_BlogInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_BlogInput;
}
