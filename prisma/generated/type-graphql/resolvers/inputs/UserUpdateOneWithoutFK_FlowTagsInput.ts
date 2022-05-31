import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FlowTagsInput } from "../inputs/UserCreateOrConnectWithoutFK_FlowTagsInput";
import { UserCreateWithoutFK_FlowTagsInput } from "../inputs/UserCreateWithoutFK_FlowTagsInput";
import { UserUpdateWithoutFK_FlowTagsInput } from "../inputs/UserUpdateWithoutFK_FlowTagsInput";
import { UserUpsertWithoutFK_FlowTagsInput } from "../inputs/UserUpsertWithoutFK_FlowTagsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_FlowTagsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_FlowTagsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowTagsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FlowTagsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FlowTagsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FlowTagsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_FlowTagsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_FlowTagsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FlowTagsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_FlowTagsInput | undefined;
}
