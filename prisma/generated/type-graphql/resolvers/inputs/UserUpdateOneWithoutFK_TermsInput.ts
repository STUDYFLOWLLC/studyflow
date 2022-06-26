import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_TermsInput } from "../inputs/UserCreateOrConnectWithoutFK_TermsInput";
import { UserCreateWithoutFK_TermsInput } from "../inputs/UserCreateWithoutFK_TermsInput";
import { UserUpdateWithoutFK_TermsInput } from "../inputs/UserUpdateWithoutFK_TermsInput";
import { UserUpsertWithoutFK_TermsInput } from "../inputs/UserUpsertWithoutFK_TermsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_TermsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_TermsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_TermsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_TermsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_TermsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_TermsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_TermsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_TermsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_TermsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_TermsInput | undefined;
}
