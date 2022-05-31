import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagCreateManyFK_UserInputEnvelope } from "../inputs/FlowTagCreateManyFK_UserInputEnvelope";
import { FlowTagCreateOrConnectWithoutFK_UserInput } from "../inputs/FlowTagCreateOrConnectWithoutFK_UserInput";
import { FlowTagCreateWithoutFK_UserInput } from "../inputs/FlowTagCreateWithoutFK_UserInput";
import { FlowTagScalarWhereInput } from "../inputs/FlowTagScalarWhereInput";
import { FlowTagUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/FlowTagUpdateManyWithWhereWithoutFK_UserInput";
import { FlowTagUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/FlowTagUpdateWithWhereUniqueWithoutFK_UserInput";
import { FlowTagUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/FlowTagUpsertWithWhereUniqueWithoutFK_UserInput";
import { FlowTagWhereUniqueInput } from "../inputs/FlowTagWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowTagUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [FlowTagCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: FlowTagCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: FlowTagCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: FlowTagUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowTagCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: FlowTagCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowTagWhereUniqueInput], {
    nullable: true
  })
  set?: FlowTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlowTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagWhereUniqueInput], {
    nullable: true
  })
  delete?: FlowTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: FlowTagUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: FlowTagUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlowTagScalarWhereInput[] | undefined;
}
