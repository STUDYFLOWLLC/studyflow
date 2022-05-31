import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowCreateManyFK_FlowInput } from "../inputs/FlowTagOnFlowCreateManyFK_FlowInput";

@TypeGraphQL.InputType("FlowTagOnFlowCreateManyFK_FlowInputEnvelope", {
  isAbstract: true
})
export class FlowTagOnFlowCreateManyFK_FlowInputEnvelope {
  @TypeGraphQL.Field(_type => [FlowTagOnFlowCreateManyFK_FlowInput], {
    nullable: false
  })
  data!: FlowTagOnFlowCreateManyFK_FlowInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
