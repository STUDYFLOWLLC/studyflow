import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_TermsInput } from "../inputs/UserCreateOrConnectWithoutFK_TermsInput";
import { UserCreateWithoutFK_TermsInput } from "../inputs/UserCreateWithoutFK_TermsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_TermsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_TermsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_TermsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_TermsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_TermsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_TermsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
