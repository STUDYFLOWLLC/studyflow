import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_TagsInput } from "../inputs/FlowCreateOrConnectWithoutFK_TagsInput";
import { FlowCreateWithoutFK_TagsInput } from "../inputs/FlowCreateWithoutFK_TagsInput";
import { FlowUpdateWithoutFK_TagsInput } from "../inputs/FlowUpdateWithoutFK_TagsInput";
import { FlowUpsertWithoutFK_TagsInput } from "../inputs/FlowUpsertWithoutFK_TagsInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateOneWithoutFK_TagsInput", {
  isAbstract: true
})
export class FlowUpdateOneWithoutFK_TagsInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_TagsInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_TagsInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_TagsInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_TagsInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpsertWithoutFK_TagsInput, {
    nullable: true
  })
  upsert?: FlowUpsertWithoutFK_TagsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_TagsInput, {
    nullable: true
  })
  update?: FlowUpdateWithoutFK_TagsInput | undefined;
}
