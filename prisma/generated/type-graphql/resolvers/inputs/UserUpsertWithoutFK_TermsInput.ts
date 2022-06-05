import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_TermsInput } from "../inputs/UserCreateWithoutFK_TermsInput";
import { UserUpdateWithoutFK_TermsInput } from "../inputs/UserUpdateWithoutFK_TermsInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_TermsInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_TermsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_TermsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_TermsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_TermsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_TermsInput;
}
