import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagCreateOrConnectWithoutFK_FlowsInput } from "../inputs/FlowTagCreateOrConnectWithoutFK_FlowsInput";
import { FlowTagCreateWithoutFK_FlowsInput } from "../inputs/FlowTagCreateWithoutFK_FlowsInput";
import { FlowTagUpdateWithoutFK_FlowsInput } from "../inputs/FlowTagUpdateWithoutFK_FlowsInput";
import { FlowTagUpsertWithoutFK_FlowsInput } from "../inputs/FlowTagUpsertWithoutFK_FlowsInput";
import { FlowTagWhereUniqueInput } from "../inputs/FlowTagWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagUpdateOneWithoutFK_FlowsInput", {
  isAbstract: true
})
export class FlowTagUpdateOneWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => FlowTagCreateWithoutFK_FlowsInput, {
    nullable: true
  })
  create?: FlowTagCreateWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagCreateOrConnectWithoutFK_FlowsInput, {
    nullable: true
  })
  connectOrCreate?: FlowTagCreateOrConnectWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagUpsertWithoutFK_FlowsInput, {
    nullable: true
  })
  upsert?: FlowTagUpsertWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FlowTagWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowTagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagUpdateWithoutFK_FlowsInput, {
    nullable: true
  })
  update?: FlowTagUpdateWithoutFK_FlowsInput | undefined;
}
