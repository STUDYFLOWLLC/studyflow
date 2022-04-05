import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFlowsInput } from "../inputs/UserCreateOrConnectWithoutFlowsInput";
import { UserCreateWithoutFlowsInput } from "../inputs/UserCreateWithoutFlowsInput";
import { UserUpdateWithoutFlowsInput } from "../inputs/UserUpdateWithoutFlowsInput";
import { UserUpsertWithoutFlowsInput } from "../inputs/UserUpsertWithoutFlowsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFlowsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFlowsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFlowsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFlowsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFlowsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFlowsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFlowsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFlowsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFlowsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFlowsInput | undefined;
}
