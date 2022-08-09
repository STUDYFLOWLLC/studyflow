import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_BlogInput } from "../inputs/UserCreateWithoutFK_BlogInput";
import { UserUpdateWithoutFK_BlogInput } from "../inputs/UserUpdateWithoutFK_BlogInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_BlogInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_BlogInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_BlogInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_BlogInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_BlogInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_BlogInput;
}
