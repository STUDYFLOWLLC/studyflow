import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_BlogInput } from "../inputs/UserCreateOrConnectWithoutFK_BlogInput";
import { UserCreateWithoutFK_BlogInput } from "../inputs/UserCreateWithoutFK_BlogInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_BlogInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_BlogInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_BlogInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_BlogInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_BlogInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_BlogInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
