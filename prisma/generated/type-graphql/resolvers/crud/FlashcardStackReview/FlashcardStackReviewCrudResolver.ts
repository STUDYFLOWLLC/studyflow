import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlashcardStackReviewArgs } from "./args/AggregateFlashcardStackReviewArgs";
import { CreateFlashcardStackReviewArgs } from "./args/CreateFlashcardStackReviewArgs";
import { CreateManyFlashcardStackReviewArgs } from "./args/CreateManyFlashcardStackReviewArgs";
import { DeleteFlashcardStackReviewArgs } from "./args/DeleteFlashcardStackReviewArgs";
import { DeleteManyFlashcardStackReviewArgs } from "./args/DeleteManyFlashcardStackReviewArgs";
import { FindFirstFlashcardStackReviewArgs } from "./args/FindFirstFlashcardStackReviewArgs";
import { FindManyFlashcardStackReviewArgs } from "./args/FindManyFlashcardStackReviewArgs";
import { FindUniqueFlashcardStackReviewArgs } from "./args/FindUniqueFlashcardStackReviewArgs";
import { GroupByFlashcardStackReviewArgs } from "./args/GroupByFlashcardStackReviewArgs";
import { UpdateFlashcardStackReviewArgs } from "./args/UpdateFlashcardStackReviewArgs";
import { UpdateManyFlashcardStackReviewArgs } from "./args/UpdateManyFlashcardStackReviewArgs";
import { UpsertFlashcardStackReviewArgs } from "./args/UpsertFlashcardStackReviewArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { FlashcardStackReview } from "../../../models/FlashcardStackReview";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFlashcardStackReview } from "../../outputs/AggregateFlashcardStackReview";
import { FlashcardStackReviewGroupBy } from "../../outputs/FlashcardStackReviewGroupBy";

@TypeGraphQL.Resolver(_of => FlashcardStackReview)
export class FlashcardStackReviewCrudResolver {
  @TypeGraphQL.Query(_returns => FlashcardStackReview, {
    nullable: true
  })
  async flashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFlashcardStackReviewArgs): Promise<FlashcardStackReview | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => FlashcardStackReview, {
    nullable: true
  })
  async findFirstFlashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFlashcardStackReviewArgs): Promise<FlashcardStackReview | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [FlashcardStackReview], {
    nullable: false
  })
  async flashcardStackReviews(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFlashcardStackReviewArgs): Promise<FlashcardStackReview[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FlashcardStackReview, {
    nullable: false
  })
  async createFlashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateFlashcardStackReviewArgs): Promise<FlashcardStackReview> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyFlashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyFlashcardStackReviewArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FlashcardStackReview, {
    nullable: true
  })
  async deleteFlashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteFlashcardStackReviewArgs): Promise<FlashcardStackReview | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FlashcardStackReview, {
    nullable: true
  })
  async updateFlashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateFlashcardStackReviewArgs): Promise<FlashcardStackReview | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyFlashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyFlashcardStackReviewArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyFlashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyFlashcardStackReviewArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FlashcardStackReview, {
    nullable: false
  })
  async upsertFlashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertFlashcardStackReviewArgs): Promise<FlashcardStackReview> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateFlashcardStackReview, {
    nullable: false
  })
  async aggregateFlashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlashcardStackReviewArgs): Promise<AggregateFlashcardStackReview> {
    return getPrismaFromContext(ctx).flashcardStackReview.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [FlashcardStackReviewGroupBy], {
    nullable: false
  })
  async groupByFlashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFlashcardStackReviewArgs): Promise<FlashcardStackReviewGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
