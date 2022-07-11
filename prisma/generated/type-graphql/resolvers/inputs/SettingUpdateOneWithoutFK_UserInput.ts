import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingCreateOrConnectWithoutFK_UserInput } from "../inputs/SettingCreateOrConnectWithoutFK_UserInput";
import { SettingCreateWithoutFK_UserInput } from "../inputs/SettingCreateWithoutFK_UserInput";
import { SettingUpdateWithoutFK_UserInput } from "../inputs/SettingUpdateWithoutFK_UserInput";
import { SettingUpsertWithoutFK_UserInput } from "../inputs/SettingUpsertWithoutFK_UserInput";
import { SettingWhereUniqueInput } from "../inputs/SettingWhereUniqueInput";

@TypeGraphQL.InputType("SettingUpdateOneWithoutFK_UserInput", {
  isAbstract: true
})
export class SettingUpdateOneWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => SettingCreateWithoutFK_UserInput, {
    nullable: true
  })
  create?: SettingCreateWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => SettingCreateOrConnectWithoutFK_UserInput, {
    nullable: true
  })
  connectOrCreate?: SettingCreateOrConnectWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => SettingUpsertWithoutFK_UserInput, {
    nullable: true
  })
  upsert?: SettingUpsertWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SettingWhereUniqueInput, {
    nullable: true
  })
  connect?: SettingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SettingUpdateWithoutFK_UserInput, {
    nullable: true
  })
  update?: SettingUpdateWithoutFK_UserInput | undefined;
}
